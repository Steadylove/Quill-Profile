// React Three Fiber 类型扩展
import "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Three.js 原生元素
      points: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<THREE.Points>;
      };
      bufferGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      bufferAttribute: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
        count?: number;
        array?: Float32Array;
        itemSize?: number;
      };
      pointsMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        size?: number;
        color?: string;
        transparent?: boolean;
        opacity?: number;
        sizeAttenuation?: boolean;
      };
      ambientLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        intensity?: number;
      };
      directionalLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        position?: [number, number, number];
        intensity?: number;
      };
      pointLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        position?: [number, number, number];
        intensity?: number;
        color?: string;
      };
    }
  }
}

export {};
