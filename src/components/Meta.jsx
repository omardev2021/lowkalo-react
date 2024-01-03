import React from 'react';

import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Lowkalo : Everything related to managing the inventory of restaurants and cafes',
  description: 'Lowkalo offers everything related to restaurant and cafes management, from courses to offering all solutions on the market to help you manage your project.',
  keywords: 'back of house, front of house , pos , loyalty programs',
};

export default Meta;