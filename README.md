# Api Rest GameHash
<h2>Sumário:</h2>
<ul>
<li><a href="#endpoint">EndPoint</a></li>
<li><a href="#serverless">Serverless</a></li>
<li><a href="#services">Services</a></li>
</ul>

# Resumo
  Api retorna uma sequência onde favoreça a vitória do jogador 'o', isso posto ela verifica onde está a melhor jogada.
  Baseado nessa lógica ela receberá uma sequencia passa por uma QueryString ?board= com o tamanho máximo de 9 caracteres, para isso além da construção da API baseada na Cloud foi criado funções desacopladas onde será verificada cada parte do "tabuleiro" e retornar para o jogador onde será a melhor jogada.
<hr>

# Services
  <h3 name="services">smashString:</h3> "Quebra" a sitring recebida via url transforma em 2 arrays um de linha outro de coluna
  <h3>checkBestMove:</h3> Recebe os arrays e determina se a melhor jogas está na linha ou na coluna. Sendo assim chama as determinadas funções que irão ser verificadas e transformadas nas melhores jogadas.
  <h3>bestColumMoves:</h3> Caso a melhor jogada esteja na coluna essa função será chamada.
  <h3>bestRowsMoves:</h3> Caso a melhor jogada esteja na linha, essa função será chamada.
  <h3>bestDiagonalsMoves:</h3> Caso o checkBestMove não encontre a melhor jogada nas linhas nem nas colunas essa função verifica nas diagonais.

<hr>

# EndPoint

Deploy realizado na AWS: <br>
endpoint para teste:::<br>
<code name="endpoint">
``
https://rdes8davlh.execute-api.us-east-1.amazonaws.com/dev/
``
</code>


# Serverless Framework Node REST API on AWS

This template demonstrates how to make a simple REST API with Node.js running on AWS Lambda and API Gateway using the traditional Serverless Framework.

This template does not include any kind of persistence (database). For a more advanced examples check out the [examples repo](https://github.com/serverless/examples/) which includes Typescript, Mongo, <b name="serverless">DynamoDB and other examples</b>.



## Usage

### Deployment

This example is made to work with the Serverless Framework dashboard which includes advanced features like CI/CD, monitoring, metrics, etc.

```
$ serverless login
$ serverless deploy
```

To deploy without the dashboard you will need to remove `org` and `app` fields from the `serverless.yml`, and you won’t have to run `sls login` before deploying.

After running deploy, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-rest-api.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: aws-node-rest-api
stage: dev
region: us-east-1
stack: aws-node-rest-api-dev
resources: 12
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/
functions:
  api: aws-node-rest-api-dev-hello
layers:
  None
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v2.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).