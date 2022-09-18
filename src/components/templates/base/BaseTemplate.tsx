export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div>
      <h1>{sampleTextProp}</h1>
    </div>
  );
};

export default BaseTemplate;
