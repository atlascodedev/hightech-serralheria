import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import { Box, Button, SvgIcon, useTheme } from "@material-ui/core"
import { AccountCircle, Email, Phone } from "@material-ui/icons"
import FormikField from "../../UtilityComponents/FormikField"
import MaskInput from "../../UtilityComponents/MaskInput"
import ConfirmationDialog from "../../UtilityComponents/ConfirmationDialog"
import axios from "axios"

const validationSchema = Yup.object({
  name: Yup.string()
    .max(35, "Por favor, digite um nome com menos de 35 caracteres")
    .required("Digite seu nome"),

  phone: Yup.string().required("Digite um número de telefone para contato"),

  email: Yup.string()
    .email("Digite um endereço de e-mail válido")
    .required("É preciso inserir um e-mail para contato"),

  message: Yup.string().required("Digite uma mensagem"),
})

interface FormInitialValues {
  name: string
  phone: string
  email: string
  message: string
}

const initialFormValues: FormInitialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
}

type ContactFormBaseProps = {
  contactFormFontFamily: string
}

const ContactFormBase = styled.div<ContactFormBaseProps>`
  border-radius: 6px 6px 0px 0px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35);
  width: 330px;
  height: 560px;
  font-family: ${props => props.contactFormFontFamily};
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: #fff;

  /* ---------------- */ /* margin: 5vh; */
  @media (min-width: 1024px) {
    width: 460px;
    height: 600px;
  }
`

const ContactFormHeader = styled.div`
  width: 100%;
  border-radius: 6px 6px 0px 0px;
  background-color: #4a4a4a;
  height: 14.36%;
  color: #fff;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 800;
`

const ContactFormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  height: calc(100% - 14.36%);
`

const ContactFormRowContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  place-items: center;
  height: min-content;

  & > .MuiBox-root {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 23px;
  }
`

const ContactFormRowSingleItemContaienr = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
`

interface Props {}

const ContactFormMain = (props: Props) => {
  const [dialog, setDialog] = React.useState<boolean>(false)

  const handleDialogOpen = (): void => {
    setDialog(true)
  }

  const handleDialogClose = (): void => {
    setDialog(false)
  }

  const theme = useTheme()

  return (
    <React.Fragment>
      <div>
        <ConfirmationDialog
          type="success"
          message={
            "Obrigado pelo interesse! Sua mensagem foi enviada com sucesso, logo entraremos em contato com você através do número fornecido no formulário."
          }
          dialogClose={handleDialogClose}
          open={dialog}
        />
        <Formik
          initialValues={{ name: "", phone: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values.email, values.message, values.phone, values.name)
            axios
              .post(
                "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/hightechserralheria",
                {
                  name: values.name,
                  email: values.email,
                  message: values.message,
                  phone: values.phone,
                }
              )
              .then(result => {
                actions.setSubmitting(false)
                actions.resetForm()
                handleDialogOpen()
              })
              .catch(error => {
                console.log(error)
                actions.setSubmitting(false)
              })
          }}
        >
          {formik => (
            <Form>
              <ConfirmationDialog
                type={"success"}
                message={
                  "Obrigado pelo interesse! Sua mensagem foi enviada com sucesso, logo entraremos em contato com você através do número fornecido no formulário."
                }
                dialogClose={handleDialogClose}
                open={dialog}
              />
              <ContactFormBase
                contactFormFontFamily={theme.typography.fontFamily as string}
              >
                <ContactFormHeader>Fale conosco!</ContactFormHeader>

                <ContactFormBody>
                  <ContactFormRowContainer>
                    <Box width="100%" height="100%" alignSelf="center">
                      <SvgIcon
                        className="formRowIcon"
                        component={AccountCircle}
                      />
                    </Box>
                    <FormikField
                      fullWidth
                      name="name"
                      label="Nome"
                      color="secondary"
                    />
                  </ContactFormRowContainer>
                  <ContactFormRowContainer>
                    <Box width="100%" height="100%" alignSelf="center">
                      <SvgIcon className="formRowIcon" component={Phone} />
                    </Box>
                    <MaskInput
                      mask={" (9 9)  9 - 9 9 9 9 - 9 9 9 9"}
                      name="phone"
                      label="Celular/WhatsApp"
                      onChange={formik.handleChange}
                      value={(formik.values as any).phone}
                      fullWidth
                      color="secondary"
                    ></MaskInput>
                  </ContactFormRowContainer>
                  <ContactFormRowContainer>
                    <Box width="100%" height="100%" alignSelf="center">
                      <SvgIcon className="formRowIcon" component={Email} />
                    </Box>
                    <FormikField
                      fullWidth
                      name="email"
                      label="E-mail"
                      color="secondary"
                      onChange={formik.handleChange}
                    />
                  </ContactFormRowContainer>

                  <ContactFormRowSingleItemContaienr>
                    <FormikField
                      name="message"
                      multiline
                      label="Mensagem"
                      fullWidth
                      margin="normal"
                      rows={4}
                      placeholder="Digite sua mensagem aqui"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </ContactFormRowSingleItemContaienr>

                  <Box display="flex" justifyContent="center" color={"#fff"}>
                    <Button
                      // onClick={() => formik.submitForm()}
                      color="primary"
                      type="submit"
                      disabled={!formik.isValid}
                      style={{
                        width: "50%",
                        fontSize: "16px",
                        fontWeight: 700,
                        fontFamily: theme.typography.fontFamily as string,
                      }}
                      variant="contained"
                    >
                      Enviar
                    </Button>
                  </Box>
                </ContactFormBody>
              </ContactFormBase>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  )
}

export default ContactFormMain
