import { Head } from '@inertiajs/react'
import Editor from "@/Components/Forms/User/Editor.jsx";
import Layout from "@/Components/Base/Layout.jsx";

const Create = ({ doctor }) => {
    return (
        <Layout>
            <Head title="Editor" />
            <Editor doctor={doctor}/>
        </Layout>
    )
}

export default Create;
