import React, { Component } from 'react'
import DjangoCSRFToken from 'django-react-csrftoken'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
  CButton,
  CInputFile,
  CCard,
  CCardTitle,
  CCardBody,
  CCardHeader,
  CCardSubtitle
} from "@coreui/react";
import { getProfileFetch } from '../../../actions'
import { FoxApiService } from '../../../services'
import { FoxFormGroupWithUpload, FoxSelectFormGroup, FoxReactSelectFormGroup } from '../../forms'
import { positions, tradeCompetencies } from './optionLists'
import { WithLoading, WithLoadingSpinner } from '../../loadings'

const foxApi = new FoxApiService();

class WorkerCreate extends Component {

  state = {
    name: "",
    contractor: this.props.contractor,
    birthday: "",
    phone_number: "",
    card_number_id: "",
    license_number: "",
    license_scan: "",
    passport: "",
    passport_scan: "",
    safety_green_card: "",
    safety_green_card_scan: "",
    position_in_company: -1,
    safety_quiz_answer: "",
    personal_declaration: "",
    submitCallback: "",
    registration_number: "",
    trade_competency: -1,
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleReactSelect = (option, event) => {
    this.setState({
      [event.name]: option.value
    })
  }

  handleFileUpload = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.position_in_company === -1) {
      this.setState({
        error: 'Worker position in company was not selected! Please, choose position form the list'
      })
    }
    else if (this.state.trade_competency === -1) {
      this.setState({
        error: 'Trade competency was not selected! Please, choose competency form the list'
      })
    }
    else {
      this.requestData = this.state;
      delete this.requestData.error;
      this.formData = new FormData
      Object.entries(this.requestData).forEach(([key, value]) => {
        this.formData.append(key, value);
      })
      await foxApi.createEntityWithFile('workers', this.formData)
        .then((data) => {
          this.state.submitCallback(data.id)
        },
          (error) => {
            console.error(error);
            this.setState({
              error: 'Worker creation failed!' +
                ' Please check your input and try again!' +
                ' In case this problem repeats, please contact your administrator!'
            })
          })
    }
  }

  handleSimpleSubmit = () => {
    this.setState({
      submitCallback: () => { return this.props.history.goBack() }
    });
  }

  handleSubmitWithCompetencies = () => {
    this.setState({
      submitCallback: (id) => this.props.history.push(`/workers/${id}/competencies/new`)
    });
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.changeLoadingState())
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CCardTitle>
                New Worker
              </CCardTitle>
              <CCardSubtitle>
                Fill up the form below to add a new Worker
              </CCardSubtitle>
            </CCardHeader>
            <CCardBody>
              <WithLoadingSpinner loading={this.props.loading}>

                <CForm
                  onSubmit={this.handleSubmit}
                >
                  <DjangoCSRFToken />
                  <CFormGroup>
                    <CInput
                      id="name"
                      name='name'
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="birthday">Date of birth</CLabel>
                    <CInput
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={this.state.birthday}
                      onChange={this.handleChange}
                      required
                    />
                  </CFormGroup>
                  <CFormGroup>
                    <CInput
                      id="phone_number"
                      name="phone_number"
                      placeholder="Phone number"
                      value={this.state.phone_number}
                      onChange={this.handleChange}
                    />
                  </CFormGroup>
                  <FoxReactSelectFormGroup
                    options={positions}
                    inputInfo="position_in_company"
                    inputValue={this.state.position_in_company}
                    handleChange={this.handleReactSelect}
                  />
                  <FoxSelectFormGroup
                    options={tradeCompetencies}
                    inputInfo="trade_competency"
                    inputValue={this.state.trade_competency}
                    handleChange={this.handleChange}
                  />
                  <CFormGroup>
                    <CInput
                      id="card_number_id"
                      name='card_number_id'
                      placeholder="Card number ID"
                      value={this.state.card_number_id}
                      onChange={this.handleChange}
                      required />
                  </CFormGroup>
                  <FoxFormGroupWithUpload
                    inputValue={this.state.license_number}
                    handleChange={this.handleChange}
                    handleFileUpload={this.handleFileUpload}
                    inputInfo="license_number"
                    uploadInfo="license_scan"
                  />
                  <FoxFormGroupWithUpload
                    inputValue={this.state.passport}
                    handleChange={this.handleChange}
                    handleFileUpload={this.handleFileUpload}
                    inputInfo="passport"
                    uploadInfo="passport_scan"
                  />
                  <FoxFormGroupWithUpload
                    inputValue={this.state.safety_green_card}
                    handleChange={this.handleChange}
                    handleFileUpload={this.handleFileUpload}
                    inputInfo="safety_green_card"
                    uploadInfo="safety_green_card_scan"
                  />
                  <CFormGroup>
                    <CInput
                      id="registration_number"
                      name='registration_number'
                      placeholder="Registration number"
                      value={this.state.registration_number}
                      onChange={this.handleChange}
                      required />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="safety_quiz_answer">Safety quiz answer</CLabel>
                    <CInputFile id="safety_quiz_answer" name="safety_quiz_answer" onChange={this.handleFileUpload}
                      required />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="personal_declaration">Personal declaration</CLabel>
                    <CInputFile id="personal_declaration" name="personal_declaration" onChange={this.handleFileUpload}
                      required />
                  </CFormGroup>
                  <CFormGroup>
                    <CRow>
                      <CCol md="6">
                        <CButton
                          onClick={this.handleSimpleSubmit}
                          shape="pill"
                          type="submit"
                          color="dark"
                          variant="outline"
                          block>Create Worker</CButton>
                      </CCol>
                      <CCol md="6">
                        <CButton
                          onClick={this.handleSubmitWithCompetencies}
                          shape="pill"

                          type="submit"
                          color="primary"
                          variant="outline"
                          block>Create Worker and add special competencies</CButton>
                      </CCol>
                    </CRow>
                  </CFormGroup>
                  {this.state.error
                    ? <p>{this.state.error}</p>
                    : null
                  }
                </CForm>
              </WithLoadingSpinner>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    contractor: state.currentUser.id,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WithLoading(WorkerCreate))

