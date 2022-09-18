export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate = ({ sampleTextProp }: IBaseTemplate) => {
  return (
    <div>
      <h1>{sampleTextProp}</h1>
    </div>
  );
};

export default BaseTemplate;
