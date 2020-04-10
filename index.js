const origin = 'Access-Control-Allow-Origin';
const headers = 'Access-Control-Allow-Headers';
const methods = 'Access-Control-Allow-Methods';

module.exports = cors;

function cors(config) {
  cors.config = {
    ...config,
    [origin]: '*',
    [headers]: '*',
    [methods]: '*',
  };

  return cors;
};

cors.build = function build() {
  return (req, res) => {
    Object.keys(cors.config).forEach((header) => {
      res.setHeader(header, cors.config[header]);
    });
  }
};
