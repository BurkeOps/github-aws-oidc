#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { OIDCConnector } from '../lib/provider';

const app = new cdk.App();

new OIDCConnector(app, 'GithubAwsOidcStack', {
  env: {
    account: process.env['AWS_ACCOUNT_ID'],
    region: 'eu-west-1',
  },
  envName: 'sandbox',
});
