import { db } from './firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import { AnalysisData } from './dashboard-utils';

export async function fetchAnalysisData(trademark: string, classNumber: string): Promise<AnalysisData | null> {
  try {
    if (!trademark || !classNumber) {
      return null;
    }

    // Normalize document ID
    const docId = `${trademark.toLowerCase().trim()}_${classNumber}`;
    const searchResultsRef = collection(db, 'searchResults');
    const docRef = doc(searchResultsRef, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as AnalysisData;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching analysis data:', error);
    return null;
  }
}




