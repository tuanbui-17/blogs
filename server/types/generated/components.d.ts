import type { Schema, Struct } from '@strapi/strapi';

export interface SharedPersonal extends Struct.ComponentSchema {
  collectionName: 'components_shared_personals';
  info: {
    displayName: 'Personal';
  };
  attributes: {
    details: Schema.Attribute.Component<'shared.personal-detail', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Personal'>;
  };
}

export interface SharedPersonalDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_personal_details';
  info: {
    displayName: 'PersonalDetail';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      ['name', 'role', 'phone', 'email', 'location']
    >;
    value: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedTech extends Struct.ComponentSchema {
  collectionName: 'components_shared_teches';
  info: {
    displayName: 'Tech';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedTechs extends Struct.ComponentSchema {
  collectionName: 'components_shared_techs';
  info: {
    description: '';
    displayName: 'Techs';
  };
  attributes: {
    techs: Schema.Attribute.Component<'shared.tech', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.personal': SharedPersonal;
      'shared.personal-detail': SharedPersonalDetail;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.tech': SharedTech;
      'shared.techs': SharedTechs;
    }
  }
}
