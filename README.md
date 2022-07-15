# Hawkbot Frontend

Hawkbot-frontend is a UI built to operate with Hawkbot.

## Prerequisite

### Node

If you are in this situation:

```
➜  hawkbot-frontend git:(main) node -v
command not found: node
```

You need to install Node:

```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

```
➜  hawkbot-frontend git:(main) node -v
v18.6.0
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

This will also install Node if you don't have it.

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
