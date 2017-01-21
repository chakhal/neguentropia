# To use a newer version, for example 6.3.1, use instead:
NODE_VERSION=$1

cd /opt/download

curl -LO http://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-linux-x64.tar.gz
tar xzf node-$NODE_VERSION-linux-x64.tar.gz
cp -rp node-$NODE_VERSION-linux-x64 /usr/local/

ln -s /usr/local/node-$NODE_VERSION-linux-x64 /usr/local/node
ln -s /usr/local/node-$NODE_VERSION-linux-x64/bin/node /usr/local/bin/node
ln -s /usr/local/node-$NODE_VERSION-linux-x64/bin/npm /usr/local/bin/npm

touch /opt/provisioned/nodejs-${NODE_VERSION}