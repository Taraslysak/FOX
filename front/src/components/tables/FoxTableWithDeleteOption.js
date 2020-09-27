import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CDataTable,
  CRow,
  CLink,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import WorkStatusDropdown from './WorkStatusDropdown'
import { FoxApiService } from '../../services'
import { DeleteModal } from '../modals'


const foxApi = new FoxApiService();

class FoxTableWithDeleteOption extends Component {

  state = {
    delete_id: "",
    error: "",
    modal: false
  }

  getEntityFromTableName = () => {
    this.props.tableName.toLowercase()
  }

  callDeleteModal = (id) => {
    this.setState({
      delete_id: id
    }, this.setModalVisibility)
  }

  setModalVisibility = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  confirmDelete = async (id) => {
    const entity = this.props.tableName.toLowerCase().replace(' ', '_');
    await foxApi.deleteEntityOf(entity, id)
      .then(() => {
        this.props.updateList(this.props.role)
        this.setModalVisibility()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Could not delete entity!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
    console.log(`delete entity [${entity}] ${id}`);
  }

  alertOnClick = (id, e) => {
    this.props.history.push(`${this.props.match.url}/${id}`)
  }

  render = () => {
    const linkName = this.props.fields ? this.props.fields[0] : "username"
    const { delete_id, modal } = this.state
    console.log("rendered");
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader
              className="d-flex justify-content-between">
              <CCardTitle>
                {this.props.tableName}
              </CCardTitle>
              {this.props.tableName === "Projects" && this.props.role === "Contr"
                ?
                null
                :
                <CLink
                  className="btn btn-pill btn-outline-success"
                  to={`${this.props.match.url}/new`}
                >
                  Add new
                </CLink>
              }
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={this.props.tableData ? this.props.tableData : []}
                fields={this.props.fields}
                clickableRows
                hover
                striped
                bordered
                sorter
                tableFilter
                columnFilter
                size="sm"
                itemsPerPage={10}
                itemsPerPageSelect
                pagination
                scopedSlots={{
                  [linkName]:
                    (item) => (
                      <td>
                        <CLink
                          to={`${this.props.match.url}/${item.id}`}
                        >
                          {item[linkName]}
                        </CLink>
                      </td>
                    ),
                  'application_status':
                    (item) => (
                      <td>
                        <CBadge shape="pill" color={this.props.getBadge(item.application_status)}>
                          {item.application_status}
                        </CBadge>
                      </td>
                    ),
                  'work_status':
                    (item) => (
                      <td className="d-flex align-items-center">
                        <CBadge shape="pill" color={this.props.getBadge(item.work_status)}>
                          {item.work_status}
                        </CBadge>
                        <WorkStatusDropdown key={item.id} item={item} {...this.props} />
                      </td>
                    ),
                  'delete_item':
                    (item, index) => (
                      <td>
                        <CButton color="danger" variant="ghost" size="sm" onClick={() => this.callDeleteModal(item.id)} block><CIcon name={'cilTrash'} /></CButton>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
          <DeleteModal
            setModalVisibility={this.setModalVisibility}
            danger={modal}
            entity="entity"
            confirmDelete={() => this.confirmDelete(delete_id)}
          />
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => ({
  role: state.currentUser.role
})

export default connect(mapStateToProps, null)(FoxTableWithDeleteOption)
