import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnOIDCProvider } from 'aws-cdk-lib/aws-iam';

export interface OIDCConnectorProps extends StackProps {
  envName: string;
}

export class OIDCConnector extends Stack {
  static THUMB_PRINT_ID = '6938FD4D98BAB03FAADB97B34396831E3780AEA1';
  static OIDC_URL = 'https://token.actions.githubusercontent.com';
  static STS_URL = 'sts.amazonaws.com';

  constructor(scope: Construct, id: string, props: OIDCConnectorProps) {
    super(scope, id, props);

    new CfnOIDCProvider(this, 'OIDCConnection', {
      url: OIDCConnector.OIDC_URL,
      clientIdList: [OIDCConnector.STS_URL],
      thumbprintList: [OIDCConnector.THUMB_PRINT_ID],
    });
  }
}
