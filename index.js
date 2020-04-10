const headers = {
  origin: 'Access-Control-Allow-Origin',
  headers: 'Access-Control-Allow-Headers',
  methods: 'Access-Control-Allow-Methods',
};

module.exports = cors;

function cors(config) {
  cors.config = {
    [headers.origin]: ['*'],
    [headers.headers]: ['*'],
    [headers.methods]: ['*'],
    ...config,
  };

  Object.keys(cors.config).forEach((cfg) => {
    cors.config[cfg] = cors.config[cfg].join(', ');
  });

  return cors;
};

cors.build = function build() {
  return (req, res) => {
    Object.keys(cors.config).forEach((header) => {
      res.setHeader(header, cors.config[header]);
    });
  }
};
