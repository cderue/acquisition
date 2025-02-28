import { NextFederationPlugin } from '@module-federation/nextjs-mf';

export default  {
    output: 'export',
    webpack: (config, options) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'acquisition',
                filename: 'static/runtime/remoteEntry.js',
                exposes: {
                    './CreationProjet': './src/components/formulaire-creation-projet/index.tsx',
                    './PresentationValeur': './src/components/presentation-valeur/index.tsx'
                }
            })
        );
        return config;
    }
}
