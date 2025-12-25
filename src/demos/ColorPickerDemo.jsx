import { useState } from 'react';
import './ColorPickerDemo.css';

function ColorPickerDemo() {
  const [color, setColor] = useState({
    r: 255,
    g: 107,
    b: 157
  });

  const rgbString = `rgb(${color.r}, ${color.g}, ${color.b})`;
  const hexString = `#${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b.toString(16).padStart(2, '0')}`;

  const handleColorChange = (channel, value) => {
    setColor(prev => ({
      ...prev,
      [channel]: parseInt(value)
    }));
  };

  const presetColors = [
    { name: '粉色', r: 255, g: 107, b: 157 },
    { name: '蓝色', r: 102, g: 126, b: 234 },
    { name: '绿色', r: 72, g: 219, b: 151 },
    { name: '橙色', r: 255, g: 159, b: 64 },
    { name: '紫色', r: 153, g: 102, b: 255 }
  ];

  return (
    <div className="color-picker-demo">
      <div className="color-picker-container">
        <h2 className="picker-title">🎨 颜色选择器</h2>
        
        <div className="color-preview" style={{ backgroundColor: rgbString }}>
          <div className="color-info">
            <div className="color-code">{hexString.toUpperCase()}</div>
            <div className="color-code">{rgbString}</div>
          </div>
        </div>

        <div className="color-sliders">
          <div className="slider-group">
            <label className="slider-label">
              <span className="slider-name" style={{ color: '#ff4757' }}>R</span>
              <span className="slider-value">{color.r}</span>
            </label>
            <input
              type="range"
              min="0"
              max="255"
              value={color.r}
              onChange={(e) => handleColorChange('r', e.target.value)}
              className="color-slider red-slider"
            />
          </div>

          <div className="slider-group">
            <label className="slider-label">
              <span className="slider-name" style={{ color: '#2ed573' }}>G</span>
              <span className="slider-value">{color.g}</span>
            </label>
            <input
              type="range"
              min="0"
              max="255"
              value={color.g}
              onChange={(e) => handleColorChange('g', e.target.value)}
              className="color-slider green-slider"
            />
          </div>

          <div className="slider-group">
            <label className="slider-label">
              <span className="slider-name" style={{ color: '#5352ed' }}>B</span>
              <span className="slider-value">{color.b}</span>
            </label>
            <input
              type="range"
              min="0"
              max="255"
              value={color.b}
              onChange={(e) => handleColorChange('b', e.target.value)}
              className="color-slider blue-slider"
            />
          </div>
        </div>

        <div className="preset-colors">
          <div className="preset-title">预设颜色</div>
          <div className="preset-grid">
            {presetColors.map((preset, index) => (
              <button
                key={index}
                className="preset-color-btn"
                style={{ backgroundColor: `rgb(${preset.r}, ${preset.g}, ${preset.b})` }}
                onClick={() => setColor({ r: preset.r, g: preset.g, b: preset.b })}
                title={preset.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const code = `import { useState } from 'react';

function ColorPickerDemo() {
  const [color, setColor] = useState({
    r: 255,
    g: 107,
    b: 157
  });

  const rgbString = \`rgb(\${color.r}, \${color.g}, \${color.b})\`;
  const hexString = \`#\${color.r.toString(16).padStart(2, '0')}\${color.g.toString(16).padStart(2, '0')}\${color.b.toString(16).padStart(2, '0')}\`;

  const handleColorChange = (channel, value) => {
    setColor(prev => ({
      ...prev,
      [channel]: parseInt(value)
    }));
  };

  return (
    <div className="color-picker-demo">
      <div className="color-preview" style={{ backgroundColor: rgbString }}>
        <div>{hexString.toUpperCase()}</div>
        <div>{rgbString}</div>
      </div>
      
      {/* RGB 滑块控制 */}
      <input
        type="range"
        min="0"
        max="255"
        value={color.r}
        onChange={(e) => handleColorChange('r', e.target.value)}
      />
      {/* ... 其他滑块 ... */}
    </div>
  );
}`;

export const description = `
## 功能说明

交互式 RGB 颜色选择器，实时预览颜色效果。

### 核心功能

1. **RGB 调节**：通过滑块调节红、绿、蓝三个通道
2. **实时预览**：即时显示选中的颜色
3. **格式转换**：同时显示 RGB 和 HEX 格式
4. **预设颜色**：快速选择常用颜色

### 技术要点

- **对象状态管理**：管理包含多个属性的颜色对象
- **数值转换**：RGB 到 HEX 的转换算法
- **动态样式**：根据状态动态设置 CSS
- **Range Input**：滑块组件的使用

### 知识点

- \`toString(16)\`：十进制转十六进制
- \`padStart()\`：字符串补零
- 模板字符串：构建颜色值
- 展开运算符：不可变更新对象
`;

export default ColorPickerDemo;

