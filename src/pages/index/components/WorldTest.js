export const HelloWorld = ({ props }) => <p>hello {props.msg}</p>;

export const TestWorld = ({ props, scopedSlots }) => {
  let name = 'Test World!';
  let use = 'Test Use!';
  return (
    <div class="w-full h-auto bg-red-500 text-white text-lg share:text-blue-700">
      <span> {props.msg}</span>
      <br></br>
      <span> My test value is {props.value}</span>
      <span>
        {scopedSlots.content ? scopedSlots.content({ name, use }) : 'on content'}
      </span>
    </div>
  );
};
