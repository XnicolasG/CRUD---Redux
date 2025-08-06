import { Button, Card, TextInput, Title } from "@tremor/react"


export const CreateNewUser = () => {
    return (
        <Card>
            <Title>Create new user</Title>
            <form >
                <TextInput placeholder="Type your name" />
                <TextInput placeholder="Type your email" />
                <TextInput placeholder="Type your Github" />

                <div>
                    <Button
                    type="submit"
                    >
                        Create
                    </Button>
                </div>
            </form>
        </Card>
    )
}
