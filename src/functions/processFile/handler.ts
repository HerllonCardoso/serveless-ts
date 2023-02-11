import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { getIndustryCodeService } from './get.industry.code.service';

const processFile = async () => {
  await getIndustryCodeService();

  return formatJSONResponse({
    message: 'CSV processed, please check out your console',
  });
};

export const main = middyfy(processFile);
