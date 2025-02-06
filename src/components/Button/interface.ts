import React from 'react';

export interface IBaseProps {
    /**
     * 自定义 class 类名
     */
    className?: string;
    /**
     * 自定义 style 样式
     */
    style?: React.CSSProperties;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}

export interface IButtonProps extends IBaseProps {
    /**
     * 按钮文案
     */
    label?: string;
    /**
     * 点击回调事件
     * @returns void
     */
    onClick?: () => void;
    /**
     * 按钮类型
     */

    /**
     * 按钮大小
     */
    size?: 'small' | 'middle' | 'large';
    /**
     * 按钮禁用
     */
    disabled?: boolean;
}
