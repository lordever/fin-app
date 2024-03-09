import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://keycloak-server${kc_base_path}',
    realm: 'myrealm',
    clientId: 'myapp'
});

export default keycloak;
