# /

Este es el servidor de Continuous Delivery para Kisana.

Este servidor corre en la misma máquina que el servidor de backend, sirve para que desde GitHub se pueda hacer deploy automático para producción o para pruebas.

## Instrucciones de ejecución

Debido que este server corre junto al del backend, debe correr en un puerto diferente.

Pasos para ejecución:

1. Con base en `.env.example` generar un archivo `.env` que tenga las variables allí mencionadas. 

Se usa otra variable para el puerto debido a que son variables de entorno que corren en la misma máquina y si se usa PORT, usa el puerto del otro server.

`SERVER_DIRECTORY` es el directorio donde está el servidor de backend.

2. Correr con `npm run dev` y después tunelear con `ngrok http PUERTOELEGIDO`.

3. Dar de alta los webhooks en el repositorio de GitHub con el link que otorga ngrok.