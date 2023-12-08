import { CognitoIdentityProviderClient, InitiateAuthCommand, AuthFlowType, ResendConfirmationCodeCommand, ForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider";

const initiateAuth = async (username, password) => {
    const client = new CognitoIdentityProviderClient({ region: "ap-south-1" });

    const command = new InitiateAuthCommand({
        AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
        },
        ClientId: '1tcioula3m2in01h95upkevlnj'
    });

    const authResult = await client.send(command);
    console.log('init auth response: ', authResult);
    return authResult;
};

const forgotPassword = async (username) => {
    const client = new CognitoIdentityProviderClient({ region: "ap-south-1" });

    const command = new ForgotPasswordCommand({
        ClientId: '1tcioula3m2in01h95upkevlnj',
        Username: username,
    });

    const result = await client.send(command);
    console.log('forgot pswd response: ', result);
    return result;
};


export { initiateAuth, forgotPassword };
