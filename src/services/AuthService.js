import {
    CognitoIdentityProviderClient, InitiateAuthCommand, AuthFlowType, ForgotPasswordCommand, ConfirmForgotPasswordCommand, ChangePasswordCommand
} from "@aws-sdk/client-cognito-identity-provider";

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

const confirmForgotPassword = async (username, confirmationCode) => {
    const client = new CognitoIdentityProviderClient({ region: "ap-south-1" });

    const command = new ConfirmForgotPasswordCommand({
        ClientId: '1tcioula3m2in01h95upkevlnj',
        Username: username,
        ConfirmationCode: confirmationCode
    });

    const result = await client.send(command);
    console.log('confirm forgot pswd response: ', result);
    return result;
};

const changePassword = async (accessToken, oldPswd, newPswd) => {
    const client = new CognitoIdentityProviderClient({ region: "ap-south-1" });

    const command = new ChangePasswordCommand({
        AccessToken: accessToken,
        PreviousPassword: oldPswd,
        ProposedPassword: newPswd
    });

    const result = await client.send(command);
    console.log('change pswd response: ', result);
    return result;
};

export { initiateAuth, forgotPassword, confirmForgotPassword, changePassword };
