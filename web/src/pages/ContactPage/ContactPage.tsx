import { Metadata, useMutation } from '@redwoodjs/web'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  Label,
  FormError,
  SubmitHandler,
  FieldError,
  useForm,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'


interface FormValues {
  input: string
}

import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`
const ContactPage = () => {
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }
  const formMethods = useForm()


  return (
    <>
      <Metadata title="Contact" description="Contact page" />
      <Toaster />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error}
      formMethods={formMethods}>
        <FormError error={error} wrapperClassName="form-error" />


        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{
            required: true,
          }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,

          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Save</Submit>
      </Form>

    </>
  )
}

export default ContactPage
