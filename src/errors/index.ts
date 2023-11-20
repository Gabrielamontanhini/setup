import httpStatus from 'http-status';

export function notFound() {
  return {
    name: 'NOTFOUND',
    code: httpStatus.NOT_FOUND,
  };
}
