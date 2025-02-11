import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)
export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []
    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })
    return products
}

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "products"), where("category", '==', category))
    const querySnapshot = await getDocs(q)
    const productsByCategory = []
    querySnapshot.forEach((doc) => {
        productsByCategory.push(doc.data())
    })
    return productsByCategory
}

export const getProduct = async (id) => {
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data()
    } else[
        console.log('Este articulo no existe')
    ]
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, 'orders'), order)
        return docRef.id
    } catch (e) {
        console.error('Error al realizar la orden')
    } finally {
        alert(`Excelente!! Su orden se ha completado con el ID ${docRef.id}`)
    }
}