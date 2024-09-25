/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (value) {
            if (val !== value) {
                throw new Error("Not Equal");
            } else {
                return true
            }
        },
        notToBe: function (value) {
            if (val === value) {
                throw new Error("Equal")
            } else {
                return true
            }
        }
    }
};

try {
   expect(5).toBe(5);
   expect(5).notToBe(5); 
} catch (error) {
    console.error(error.message)
}
