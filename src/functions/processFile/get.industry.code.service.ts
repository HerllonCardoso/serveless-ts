import axios from 'axios';
import csvParser from 'csv-parser';

export const getIndustryCodeService = async () => {
  const fileurl =
    'https://stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2021-financial-year-provisional/Download-data/annual-enterprise-survey-2021-financial-year-provisional-csv.csv';

  axios({
    method: 'get',
    url: fileurl,
    responseType: 'stream',
  })
    .then((response) => {
      response.data
        .pipe(csvParser())
        .on('data', (data) => {
          console.log(data.Industry_code_ANZSIC06);
        })
        .on('end', () => {
          console.log('csv file successfully processed');
        });
    })
    .catch((error) => {
      console.error(error);
    });
};
