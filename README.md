# Office Hours #013

Demo File 1: [serve-1.js](serve-1.js)
```bash
node serve-1.js
```
Demo File 2: [serve-2.js](serve-2.js)
```bash
node serve-2.js
```

## In Order of Appearance

### Custom Response

Link: https://ngrok.com/docs/traffic-policy/actions/custom-response/

> [!NOTE]  
> The Custom Response Traffic Policy action enables you to return a hard-coded response back to the client that made a request to your endpoint.

Traffic Policy File: [00-custom-response.yaml](00-custom-response.yaml)
```bash
ngrok http 8080 --traffic-policy-file 00-custom-response.yaml
```

### Basic Authentication

Link: https://ngrok.com/docs/traffic-policy/actions/basic-auth/

> [!NOTE]  
> The Basic Auth Traffic Policy action enables you to enforce HTTP Basic Auth on your endpoints. Requests with a valid username and password will be sent to your upstream service, all others will be rejected with a 401 Unauthorized response.

Traffic Policy File: [01-basic-auth.yaml](01-basic-auth.yaml)
```bash
ngrok http 8080 --traffic-policy-file 01-basic-auth.yaml
```

### OAuth

Link: https://ngrok.com/docs/traffic-policy/actions/oauth/

> [!NOTE]  
> The OAuth Traffic Policy action restricts access to only authorized users by enforcing OAuth through an identity provider of your choice.

Traffic Policy File: [02-oauth.yaml](02-oauth.yaml)
```bash
ngrok http 8080 --traffic-policy-file 02-oauth.yaml
```

### Rate Limit

> [!NOTE]  
> The Rate Limit Traffic Policy action enables you to configure thresholds that restrict the throughput of traffic that successfully reaches your endpoint.

Traffic Policy File: [03-rate-limit.yaml](03-rate-limit.yaml)
```bash
ngrok http 8080 --traffic-policy-file 03-rate-limit.yaml
```

### Load Balancing

> [!NOTE]  
> When your create two endpoints with the same URL (and binding), those endpoints automatically form a "pool" and share incoming traffic.

```bash
ngrok http 8080 --url=[URL] --pooling-enabled
```

```bash
ngrok http 8081 --url=[URL] --pooling-enabled
```