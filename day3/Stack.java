
public class Stack<T> {
    private Object[] store;
    private int len;

//    protected T clone() {
//        Stack st = new Stack();
//        st.store = this.store.clone();
//        st.len = this.len;
//        return st;
//    }

    public Stack() {
        this.store = new Object[10]; 
        this.len = 0;
    }

    public void push(T a) {
        if (this.len >= this.store.length) {
            Object[] arr = new Object[this.store.length * 2];
            for (int i = 0; i < this.len; i++) {
                arr[i] = this.store[i];
            }
            this.store = arr;
        }
        this.store[this.len] = a;
        this.len++;
    }

    public T pop() {
        if (this.len == 0) {  // TODO should throw an exception
            return (T)new Integer(0);
        }
        Object val = this.store[this.len - 1];
        this.len--;
        return (T)val;
    }

    public boolean isEmpty() {
        return this.len == 0;
    }


    public static void main(String[] args) {
        Stack<String> st = new Stack<String>();
        for (int i = 0; i < 50; i++) {
            st.push(new Integer(i).toString());
        }

        for (int i = 0; i < 20; i++) {
            System.out.println(st.pop());
        }
    }
}   
