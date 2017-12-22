#  use tree to generate file tree
**mac or linux**

* tree -d  只显示文件夹
* tree -L n  显示项目层级。n 代表层级数 。# tree -l 3  
* tree -I parttern 过滤不想显示的内容  # tree -I "node_modules";
* tree > tree.md  将项目结构输出到tree.md 这个文件

## example   
    *  tree -L 3 -I "node_modules"

**windows**

* tree /f > tree.md
* tree /? # 查看命令用法
