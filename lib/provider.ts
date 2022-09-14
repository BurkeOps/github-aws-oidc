import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnOIDCProvider } from 'aws-cdk-lib/aws-iam';

export interface OIDCConnectorProps extends StackProps {
  envName: string;
}

export class OIDCConnector extends Stack {
  constructor(scope: Construct, id: string, props: OIDCConnectorProps) {
    super(scope, id, props);

    const THUMB_PRINT_ID = '6938FD4D98BAB03FAADB97B34396831E3780AEA1';
    const OIDC_URL = 'https://token.actions.githubusercontent.com';
    const STS_URL = 'sts.amazonaws.com';

    new CfnOIDCProvider(this, 'OIDCConnection', {
      url: OIDC_URL,
      clientIdList: [STS_URL],
      thumbprintList: [THUMB_PRINT_ID],
    });
  }
}
