import { FC, ReactNode, ReactElement, useEffect, useRef } from 'react';

import './style.scss';

interface iTabItemProps {
  title: string | ReactNode;
  id?: string;
  children?: ReactNode;
}

export const SlideItemComponent: FC<iTabItemProps> = (props) => {
  return (<>{props.children}</>)
}

interface IProps {
  className?: string;
  classHeaderContainer?: string;
  slideActive: number;
  headerHasScroll?: boolean;
  lineSwipe?: boolean;
  showLine?: boolean;
  theme?: 'white' | 'rounded';

  children: Array<ReactElement<iTabItemProps>>;
  onSlide: (indexTab: number) => void;
}

export const SlideComponent: FC<IProps> = (props) => {
  const refTab: any = useRef(null);

  useEffect(() => {
    updateHeaderLine();
  }, [props.slideActive]);

  const updateHeaderLine = () => {
    if (props.lineSwipe && refTab) {
      let refTabActive = refTab.current.querySelector('.c_tab__header_item__IsActive')
      if (refTabActive) {
        refTab.current.querySelector('.c_tab__header_line_active').style['width'] = `${refTabActive.offsetWidth}px`;
        refTab.current.querySelector('.c_tab__header_line_active').style['transform'] = `translateX(${refTabActive.offsetLeft}px)`;
      }
    }
  }

  let className = props.className || '';
  let classHeaderContainer = props.classHeaderContainer || '';
  let classTheme = function () {
    switch (props.theme) {
      case 'white':
        return 'c_tab__White'
      case 'rounded':
        return 'c_tab__Rounded'
      default:
        return ''
    }
  }();


  return (
    <div className={`'c_tab' ${className} ${classTheme}`}>
      <div className={`'c_tab__header_container' ${classHeaderContainer} ${props.headerHasScroll ? 'c_tab__header_container_overflow' : ''}`}
        ref={refTab}
      >
        <div className="c_tab__header" >
          {
            props.children.map((item: any, index) => {
              if (item) {
                let classActive = props.slideActive === index ? 'c_tab__header_item__IsActive' : "";
                let classShowLine = props.showLine ? 'c_tab__header_item__ShowLine' : "";
                let classShowLineSwipe = props.lineSwipe ? 'c_tab__header_item__ShowLineSwipe' : "";
                let itemProps: iTabItemProps = item.props;

                return (
                  <div
                    key={index}
                    className={`c_tab__header_item ${classActive} ${classShowLine} ${classShowLineSwipe}`}
                    id={itemProps.id || ""}
                    onClick={() => { props.onSlide(index) }}
                    style={{ width: `${props.children.length * 100 / props.children.length}%` }}
                  >
                    {item.props.icon}
                    <div className={`c_tab__header_item_title ${classActive ? '' : 'c_tab__header_item_title_deactivate'}`}>{itemProps.title}</div>
                  </div>
                )
              }
              return null
            })
          }

          {
            props.lineSwipe &&
            <div className="c_tab__header_line_active" />
          }
        </div>
      </div>

      <div className="c_tab__body">
        {
          props.children.map((item: any, index) => {
            let classActive;
            if (item) {
              classActive = props.slideActive === index ? 'c_tab__body_item__IsActive' : "";
              return <div key={index} className={`c_tab__body_item ${classActive}`} >{item.props.children}</div>
            }
            return null
          })
        }
      </div>
    </div>
  )
}
