/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


// const nextConfig = {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         // Add a rule to ignore name conflicts
//         config.module.rules.push({
//             test: /node_modules[\\/]@mui[\\/]material[\\/]/,
//             resolve: {
//                 alias: {
//                     '@mui/system': '@mui/system/node_modules/@mui/system',
//                     '@mui/private-theming': '@mui/private-theming/node_modules/@mui/private-theming',
//                     // other modules that may cause conflicts
//                 },
//             },
//         });

//         return config;
//     },
// };
// module.exports = nextConfig


// next.config.js
// module.exports = {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         // Додаємо правило для вирішення конфлікту імен в @mui/material
//         config.module.rules.push({
//             test: /@mui[\/\\]material/,
//             resolve: {
//                 alias: {
//                     '@mui/system': '@mui/system/esm/system.js',
//                 },
//             },
//         });

//         return config;
//     },
// };


