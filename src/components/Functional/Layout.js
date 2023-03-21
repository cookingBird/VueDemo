export const LayoutCol = ({ props, scopedSlots, data }) => {
  props.fixed = props.fixed || 'left';
  let { staticClass, staticStyle } = data;
  let isRightFixed = props.fixed == 'right' ? true : false;
  let isWidth = Boolean(props.width);
  let width = String(props.width).replace('px', '') + 'px';
  return (
    <div class={'flex flex-row ' + staticClass} style={staticStyle}>
      <div
        class={
          !isRightFixed
            ? 'h-full flex-grow-0 flex-shrink-0'
            : 'h-full flex-grow flex-shrink'
        }
        style={!isRightFixed && isWidth ? 'width:' + width : ''}
      >
        {scopedSlots.left?.()}
      </div>
      <div
        class={
          isRightFixed
            ? 'h-full flex-grow-0 flex-shrink-0'
            : 'h-full flex-grow flex-shrink'
        }
        style={isRightFixed && isWidth ? 'width:' + width : ''}
      >
        {scopedSlots.right ? scopedSlots.right() : scopedSlots.default()}
      </div>
    </div>
  );
};

export const LayoutRow = ({ props, scopedSlots, data }) => {
  props.fixed = props.fixed || 'top';
  let { staticClass, staticStyle } = data;
  let isBottomFixed = props.fixed == 'bottom' ? true : false;
  let isHeight = Boolean(props.height);
  let height = String(props.height).replace('px', '') + 'px';
  return (
    <div class={'flex flex-col ' + staticClass} style={staticStyle}>
      <div
        class={
          !isBottomFixed
            ? 'w-full flex-grow-0 flex-shrink-0'
            : 'w-full flex-grow flex-shrink'
        }
        style={!isBottomFixed && isHeight ? 'height:' + height : ''}
      >
        {scopedSlots.top?.()}
      </div>
      <div
        class={
          isBottomFixed
            ? 'w-full flex-grow-0 flex-shrink-0'
            : 'w-full flex-grow flex-shrink'
        }
        style={isBottomFixed && isHeight ? 'height:' + height : ''}
      >
        {scopedSlots.bottom ? scopedSlots.bottom() : scopedSlots.default()}
      </div>
    </div>
  );
};
