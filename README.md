# Hawkbot Frontend

Hawkbot-frontend is a UI built to operate with Hawkbot.

## Prerequisite

### Node

If you are in this situation:

```
➜  hawkbot-frontend git:(main) node -v
command not found: node
```

You need to install Node, especially a stable version `>12`:

```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

```
➜  hawkbot-frontend git:(main) node -v
v16.16.0
```

### Yarn

If you are in this situation:

```
➜  hawkbot-frontend git:(main) yarn -v
command not found: yarn
```

You need to install Yarn:

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn
```

```
➜  hawkbot-frontend git:(main) yarn -v
1.22.19
```

## Usage

```
git clone https://github.com/HawkeyeBot/hawkbot-frontend.git

cd hawkbot-frontend

yarn install && yarn run build
```

If you don't have `serve` installed, you will need to:

```
yarn global add serve
```

and then finally:

```
serve -s build
```

You will need an SSH tunnel:

```
ssh -L 3000:127.0.0.1:3000 <user>@<ip>
```

also for the backend:

```
ssh -L 6969:127.0.0.1:6969 <user>@<ip>
```

then in your browser you can go to `localhost:3000/`
