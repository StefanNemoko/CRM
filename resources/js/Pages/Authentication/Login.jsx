import { Head } from '@inertiajs/react'
import Layout from "@/Components/Base/Layout.jsx";
import LoginForm from "@/Components/Forms/User/Login.jsx";

console.log(LoginForm);

const Login = () => {
    return (
        <Layout>
            <Head title="Login" />
            <LoginForm/>
        </Layout>
    )
}

export default Login;
