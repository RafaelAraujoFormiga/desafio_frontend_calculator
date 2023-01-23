import * as yup from 'yup';

const formSchema = yup.object().shape({
    amount: yup.string()
    .matches(/.{4,}/, "A quantia deve ser maior ou igual a 1.000."),
    mdr: yup.string()
    .matches(/.{1,}/, "As parcelas devem ser maiores ou iguais a 1.")
});

export default formSchema;
// email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
// name: yup.string().required("Nome obrigatório"),
// password: yup.string().required("Senha obrigatória")
// .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
// config_password: yup.string().oneOf([yup.ref('password')],'Cofirmação deve ser iqual a senha'),
// bio: yup.string().required("Campo obrigatório"),
// contact: yup.string().required("Contato obrigatório")
// .matches(/(\d)/, "deve conter ao menos 1 número")
// .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
// .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
// .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")

