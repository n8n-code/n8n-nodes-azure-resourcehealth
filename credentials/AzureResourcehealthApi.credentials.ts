import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureResourcehealthApi implements ICredentialType {
        name = 'N8nDevAzureResourcehealthApi';

        displayName = 'Azure Resourcehealth API';

        icon: Icon = { light: 'file:../nodes/AzureResourcehealth/azure-resourcehealth.png', dark: 'file:../nodes/AzureResourcehealth/azure-resourcehealth.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Resourcehealth API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
