import { app, PORT } from "./app"

app.listen(PORT, (): void => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})
