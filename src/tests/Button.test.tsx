import { render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Button from '../components/Button/index';

describe('test Button', () => {
    // 测试按钮是否正确渲染
    test('should render', () => {
        const { getByText } = render(<Button label="test" onClick={vi.fn()} />);
        expect(getByText('test')).toBeDefined();
    });

    // 测试能否正确的响应点击事件
    test('should call onClick', () => {
        const onClick = vi.fn();
        const { getByText } = render(<Button label="test" onClick={onClick} />);
        getByText('test').click();
        expect(onClick).toHaveBeenCalled();
    });

    // 测试 disabled 属性是否生效
    test('button should be disabled', () => {
        const onClick = vi.fn();
        const { getByText } = render(
            <Button label="test" disabled={true} onClick={onClick} />
        );
        getByText('test').click();
        expect(onClick).not.toHaveBeenCalled();
    });

    test('button size', () => {
        const { getByText } = render(<Button label="test" size="large" />);
        expect(getByText('test').className).toContain('btn-large');
    });
});
