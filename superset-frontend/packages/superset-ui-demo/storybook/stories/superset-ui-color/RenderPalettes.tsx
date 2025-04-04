/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint react/prop-types: 'off' */
import './color-styles.css';

interface Palette {
  colors: string[];
  id: string;
  label: string;
}

interface RenderPalettesProps {
  title?: string;
  palettes: Palette[];
}

export default function RenderPalettes({
  title,
  palettes,
}: RenderPalettesProps) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <table>
        <tbody>
          {palettes.map(({ colors, id, label }) => (
            <tr key={id}>
              <td className="palette-label">
                <strong>{label}</strong>
              </td>
              <td>
                <div className="palette-container">
                  {colors.map((color, i) => (
                    <div
                      key={color}
                      className="palette-item"
                      style={{
                        backgroundColor: color,
                        marginRight: i === colors.length - 1 ? 0 : 2,
                      }}
                    />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
