var argv = require('yargs')
	.options(
		{
			'username': {
				describe: 'Username or email address on the account',
				demandOption: true,
				group: 'Authentication:'
			},
			'authkey': {
				describe: 'Secret string to authenticate your account. Find yours at http://crossbrowsertesting.com/account.',
				demandOption: true,
				group: 'Authentication:'
			},
			'dir': {
				describe: 'Directory to serve from a simple webserver',
				group: 'Simple static webserver:'
			
			},
			'port': {
				description: 'Desired port for the simple webserver',
				default: 8080,
				implies: 'dir',
				group: 'Simple static webserver:',
			},
			'proxyIp': {
				description: 'IP address of the proxy server to route traffic through. Can be an internal or external proxy.',
				implies: 'proxyPort',
				group: 'Proxy routing:'
			
			},
			'proxyPort': {
				description: 'Port of the proxy server to route traffic through.',
				implies: 'proxyIp',
				group: 'Proxy routing:'
			
			},
			'proxyUser': {
				description: 'Username for basic-auth login to specified proxy server',
				implies: 'proxyIp',
				group: 'Proxy routing:'
			
			},
			'proxyPass': {
				description: 'Password for basic-auth login to specified proxy server',
				implies: 'proxyIp',
				group: 'Proxy routing:'
			
			},
			'tunnelname': {
				description: "Specify the name of the tunnel. Useful when running multiple tunnels on the same account.",
				group: "Misc:"

			},
			'quiet': {
				describe: 'Supress the fancy traffic-rate ui',
				group: 'Misc:'
			
			},
			'verbose': {
				type: 'boolean',
			},
			'ready': {
				describe: 'Creates an empty file at the path specified when the cbt_tunnels is fully connected.',
				group: 'Misc:',
			},
			'kill': {
				describe: 'Specify the name of a "kill file" that, if placed in the current directory, will cause the program to gracefully shutdown.',
				group: 'Misc:',
			
			},
			'test': {
				desription: false,
				type: 'boolean'

			},
			
			'cmd': {
				description: false,
				type: 'boolean',
			
			},
			// 'simpleproxy': {
			// 	description: false,
			// 	type: 'boolean',
			
			// },
			// 'tunnel': {
			// 	description: false,
			// 	type: 'boolean',
			// 	requires: ['proxyIp', 'proxyPort'],
			
			// },
			// 'webserver': {
			// 	description: false,
			// 	type: 'boolean',
			// 	requires: 'dir',
			// },
			'httpProxy': {
				description: false,
			
			},
			'httpsProxy': {
				description: false,
			
			},
		}
	)
	.conflicts('dir', ['proxyPort', 'proxyIp'])
	// .conflicts('dir', 'proxyIp')
	// .conflicts('dir', 'proxyPort')
	.env('CBT_TUNNELS') // also parse environment variables beginning with CBT_TUNNELS
	.help('help')
	.group('help', 'Misc:')
	.wrap(Math.min(process.stdout.columns !== 'undefined' ? process.stdout.columns : 0, 100))
	.argv              // return the args object
