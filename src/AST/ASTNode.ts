

export class  ASTNode{
    public children: Array<any>;
    public childrenCount: number;
    public index: number;
    public operand: string;
    public key: string;
    public val: any;
    constructor (key:string){
        this.operand = key;
        this.children = [];
        this.key = null;
        this.val = null;
        this.childrenCount = 0;
        this.index = 0;
    }

    pushChild(child: ASTNode){
        this.children.push(child);
        this.childrenCount ++;
    }

    setValue(value: any){
        for(let k of Object.keys(value)){
            this.key = k;
        }
        this.val = value[this.key];
    }

    noChild(){
        if(this.childrenCount == 0){
            return true;
        }
        return false;
    }
}