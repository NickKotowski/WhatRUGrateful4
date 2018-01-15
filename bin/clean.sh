#!/bin/bash

clrReset='\033[0m'
clrHint='\033[0;90m'
clrSuccess='\033[0;32m'
INSTALL_MODULES=true
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)

case "$1" in
        ignore-modules)
            INSTALL_MODULES=false
            ;;
esac

echo -e "${clrHint}$ yarn install: ${INSTALL_MODULES}${clrReset}\n"

echo -e "${clrSuccess}A good version of node (${NODE_VERSION})!${clrReset}\n"

echo -n "Checking version of npm ... "
if [[ $NPM_VERSION != "5."* ]]; then
    echo "Your are using npm in version ${NPM_VERSION}. To run hyper-coach-mobile you need version 5.x!!!"
    exit 1;
fi

echo -e "${clrSuccess}A good version of npm (${NPM_VERSION})!${clrReset}\n"

echo "Verifying npm cache ..."
npm cache verify
echo "Removing temp and build directories ..."
rm -rf $TMPDIR/react-*
rm -rf ios/build/ android/build/

if $INSTALL_MODULES; then
    echo "Removing node_modules/ folder ..."
    rm -rf node_modules/

    echo "Installing all modules with yarn ..."
    yarn install
fi

echo -e "\n${clrSuccess}ALL CLEAR!${clrReset}"
exit 0
