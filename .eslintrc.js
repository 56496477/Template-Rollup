module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: "eslint:recommended",
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    rules: {
        //缩进4空格
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],

        //强制单引号 可以使用es6模板语法
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        //强制分号
        semi: ['error', 'always'],
        //当命名构造函数或类的时候使用 PascalCase 式命名
        // 'new-cap': 'error',
        //当命名对象，函数和实例时使用驼峰式命名
        // 'camelcase': 'error',
        //避免使用单字母名称
        // 'id-length': 'error',
        //防止错误for循环
        'for-direction': 'error',
        //不许更改const定义过的变量
        'no-const-assign': 'error',
        //lines-between-class-members
        'lines-between-class-members': 'error',
        //强制在代码块中开括号前和闭括号后有空格
        'block-spacing': 'error',
        //不许重赋值class
        'no-class-assign': 'error',
        //不许写多余无用的正则 就是说 正则要的写的精确简练
        'no-invalid-regexp': 'error',
        //不准比较自身
        'no-self-compare': 'error',
        // 变量声明了 必须使用
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
        //禁止对参数重新赋值
        'no-param-reassign': 'error',
        //禁止使用var
        'no-var': 'error',
        //禁用未声明的变量
        'no-undef': 'error',
        //调用super之前 this
        'no-this-before-super': 'error',
        //不允许重复声明变量
        'no-redeclare': 'error',
        //不许在变量声明前使用
        'no-use-before-define': 'error',
        //箭头函数前后要有空格
        'arrow-spacing': ['error', { before: true, after: true }],
        //不许对象内有重复的key
        'no-dupe-keys': 'error',
        //强制jsx为双引号
        'jsx-quotes': 'error',
        //禁止类中成员重复出现
        'no-dupe-class-members': 'error',
        //禁止不必要的括号
        //禁止重复参数
        'no-dupe-args': 'error',
        //禁止不必要的分号
        'no-extra-semi': 'error',
        //强制使用强等
        eqeqeq: 'error',
        //async 方法 必须使用await
        'require-await': 'error',
        //不变变量强制const
        'prefer-const': 'error',
        //强制类成员方法简写
        'object-shorthand': 'error',
        //强制使用模板字符串
        'prefer-template': 'error',
        //parseInt必须制定进制位数 即是说 一定要给第二个参数 比如10
        radix: 'error',
        //结构 前后需要有空格
        'rest-spread-spacing': 'error'
    },
    globals: {
        //变量名:false
        xn: false,
        __webpack_public_path__: false,
    }
};
