
/**
 * User Profile
 */
var profile = {
  userName: 'KIM_Dev',
  nameIdFormat: 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
  access_readappend: ['2014DE05SFOP013:21.08qsz01.01.0.', 'A'],
  access_readonly:   ['2014DE05SFOP013:22.09asz05.01.3.', 'B'],
  ressort: "IB | Prüfer PB - Dev",/*,
  firstName: 'Saml',
  lastName: 'Jackson',
  displayName: 'saml jackson',
  email: 'saml.jackson@example.com',
  mobilePhone: '+1-415-555-5141',
  groups: 'Simple IdP Users, West Coast Users, Cloud Users'*/
}

/**
 * SAML Attribute Metadata
 */
var metadata = [{
  id: "access_readappend",
  optional: true,
  displayName: 'RA',
  description: 'Readappend Access',
  multiValue: true
},{
  id: "ressort",
  optional: true,
  displayName: 'Ressort',
  description: 'Ressort',
  multiValue: false
}, {
  id: "access_readonly",
  optional: true,
  displayName: 'RO',
  description: 'Readonly Access',
  multiValue: true
},/*, {
  id: "lastName",
  optional: false,
  displayName: 'Last Name',
  description: 'The surname of the user',
  multiValue: false
}, {
  id: "displayName",
  optional: true,
  displayName: 'Display Name',
  description: 'The display name of the user',
  multiValue: false
}, {
  id: "email",
  optional: false,
  displayName: 'E-Mail Address',
  description: 'The e-mail address of the user',
  multiValue: false
},{
  id: "mobilePhone",
  optional: true,
  displayName: 'Mobile Phone',
  description: 'The mobile phone of the user',
  multiValue: false
}, {
  id: "groups",
  optional: true,
  displayName: 'Groups',
  description: 'Group memberships of the user',
  multiValue: true
}, {
  id: "userType",
  optional: true,
  displayName: 'User Type',
  description: 'The type of user',
  options: ['Admin', 'Editor', 'Commenter']
}*/];

module.exports = {
  user: profile,
  metadata: metadata
}
