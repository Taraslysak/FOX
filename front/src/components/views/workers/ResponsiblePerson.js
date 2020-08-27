import React, { Component } from 'react'
import { getProfileFetch, getWorkerList } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CLabel,
  CRow,
  CCol,
  CButton
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class ResponsiblePerson extends Component {

  state = {
    responsible_person: "",
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.formData = this.state;
    delete this.formData.error;
    await foxApi.updateEntityOf('projects', this.props.match.params.id, this.formData).then(() => {
      this.props.history.goBack()
    },
      (error) => {
        console.error(error);
        this.setState({
          error: 'Responsible person creation failed!' +
            ' Please check your input and try again!' +
            ' In case this problem repeats, please contact your administrator!'
        })
      })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getWorkerList())
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CForm
            onSubmit={this.handleSubmit}
          >
            <DjangoCSRFToken />
            <CFormGroup>
              <CLabel htmlFor="responsible_person">Please, choose the responsible person among your workers.</CLabel>
              <CSelect
                id="responsible_person"
                id="responsible_person"
                name="contractor"
                placeholder="Choose responsible person"
                value={this.state.responsible_person}
                onChange={this.handleChange}
                required
              >
                <option key="-1" value="-1" disabled>Choose responsible person</option>
                {this.props.options ? this.props.options.map((option) => {
                  return (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  )
                }) : null
                }
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Set responsible person</CButton>
            </CFormGroup>
            {this.state.error
              ? <p>{this.state.error}</p>
              : null
            }
          </CForm>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    contractor: state.currentUser.id,
    options: state.entityListTable.tableData
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getWorkerList: () => dispatch(getWorkerList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiblePerson)