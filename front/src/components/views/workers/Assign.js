import React, { Component } from 'react'
import { getProfileFetch, getWorkerList, clearList } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CLabel,
  CRow,
  CCol,
  CButton,
  CSwitch,
  CSelect,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CCardTitle
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'
import { WithLoading, WithLoadingSpinner } from '../../loadings'

const foxApi = new FoxApiService();

class WorkerAssign extends Component {

  state = {
    workers: [],
    responsible_person: -1,
    error: false,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCheck = event => {
    const { workers } = this.state
    event.target.checked ?
      workers.push(parseInt(event.target.value))
      :
      workers.splice(workers.indexOf(parseInt(event.target.value)), 1);
    this.setState({
      workers: workers
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { workers, responsible_person } = this.state;
    let requestData = { workers: workers };
    requestData = { responsible_person, ...requestData }
    await foxApi.patchEntityOf("projects", this.props.match.params.id, requestData)
      .then(() => {
        this.props.history.goBack()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Workers assignment failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getWorkerList({ signal: this.abortController.signal }))
      .then(() => foxApi.getDetailsOf("projects", this.props.match.params.id))
      .then(data => this.setState({
        workers: data.workers,
        responsible_person: data.responsible_person
      }))
      .then(() => this.props.changeLoadingState())
  }

  componentWillUnmount = async () => {
    this.abortController.abort();
    await this.props.clearList();
  }

  abortController = new window.AbortController();

  render = () => {
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CCardTitle>
                Personnel Management
            </CCardTitle>
            </CCardHeader>
            <CCardBody>
              <WithLoadingSpinner loading={this.props.loading}>
                <CForm onSubmit={this.handleSubmit}>
                  <DjangoCSRFToken />
                  <CFormGroup>
                    <CCardTitle>
                      Please, choose the responsible person among your workers:
                  </CCardTitle>
                    <CSelect
                      id="responsible_person"
                      name="responsible_person"
                      placeholder="Choose responsible person"
                      value={this.state.responsible_person}
                      onChange={this.handleChange}
                      required
                    >
                      <option key="-1" value="-1" disabled>Choose responsible person</option>
                      {this.props.workers ? this.props.workers.map((worker) => {
                        return (
                          <option key={worker.id} value={worker.id}>{worker.name}</option>
                        )
                      }) : null
                      }
                    </CSelect>
                  </CFormGroup>
                  <CFormGroup>
                    <CCardTitle>
                      Please, choose workers you want to assign for this project:
                  </CCardTitle>
                    {this.props.workers ?
                      this.props.workers.map((worker) => {
                        let workers = this.state.workers;
                        return (
                          <CFormGroup key={`fg-${worker.id}`} className="d-flex">
                            <CSwitch
                              key={`cb-${worker.id}`}

                              className='mr-2'
                              id={worker.id}
                              name={worker.id}
                              value={worker.id}
                              shape={'pill'}
                              variant={'3d'}
                              color={'success'}
                              size={"sm"}
                              onChange={this.handleCheck}
                              checked={workers.includes(worker.id)}
                            />
                            <CLabel key={`lb-${worker.id}`} variant="checkbox" className="form-check-label mr-4" htmlFor={worker.id}>{worker.name}</CLabel>
                          </CFormGroup>
                        )
                      }) : null}
                  </CFormGroup>
                  {this.state.error
                    ? <p>{this.state.error}</p>
                    : null
                  }
                </CForm>
              </WithLoadingSpinner>
            </CCardBody>
            <CCardFooter>
              <CButton active={!this.props.loading} shape="pill" type="submit" color="dark" variant="outline" onClick={this.handleSubmit} block>Save changes</CButton>
            </CCardFooter>
          </CCard>
        </CCol >
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    workers: state.entityListTable.tableData,
    company: state.currentUser.company,
    contractor: state.currentUser.id,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getWorkerList: ({ ...params }) => dispatch(getWorkerList({ ...params })),
  clearList: () => dispatch(clearList())
})

export default connect(mapStateToProps, mapDispatchToProps)(WithLoading(WorkerAssign))
