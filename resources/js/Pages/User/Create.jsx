import Layout from './Layout'
import { Head } from '@inertiajs/react'

export default function create() {
    return (
        <Layout>
            <Head title="Create" />
            <h1>Welcome</h1>
            <p>Here you can create a user!</p>
        </Layout>
    )
}
